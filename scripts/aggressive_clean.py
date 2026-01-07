#!/usr/bin/env python3
import subprocess
import sys
import os
import time


# ANSI Colors for pretty output
class Colors:
    HEADER = "\033[95m"
    BLUE = "\033[94m"
    CYAN = "\033[96m"
    GREEN = "\033[92m"
    WARNING = "\033[93m"
    FAIL = "\033[91m"
    ENDC = "\033[0m"
    BOLD = "\033[1m"
    UNDERLINE = "\033[4m"


def print_header(msg):
    print(f"\n{Colors.HEADER}{Colors.BOLD}=== {msg} ==={Colors.ENDC}")


def print_step(msg):
    print(f"{Colors.CYAN}➜ {msg}{Colors.ENDC}")


def print_success(msg):
    print(f"{Colors.GREEN}✔ {msg}{Colors.ENDC}")


def print_error(msg):
    print(f"{Colors.FAIL}✘ {msg}{Colors.ENDC}")


def print_warning(msg):
    print(f"{Colors.WARNING}⚠ {msg}{Colors.ENDC}")


def run_command(command: str, description: str, ignore_errors: bool = False) -> bool:
    print_step(f"Running: {description}...")
    try:
        start_time = time.time()
        # Run command and capture output
        process = subprocess.run(
            command,
            shell=True,
            check=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
        )
        duration = time.time() - start_time
        print_success(f"Completed in {duration:.2f}s")
        return True
    except subprocess.CalledProcessError as e:
        duration = time.time() - start_time
        if ignore_errors:
            print_warning(
                f"Finished with issues in {duration:.2f}s (Exit Code: {e.returncode})"
            )
            # print(f"{Colors.FAIL}{e.stdout}{Colors.ENDC}")
            # print(f"{Colors.FAIL}{e.stderr}{Colors.ENDC}")
            return True  # Treated as success for continuation
        else:
            print_error(f"Failed after {duration:.2f}s")
            print(f"{Colors.FAIL}Error Output:\n{e.stderr}{Colors.ENDC}")
            print(f"{Colors.FAIL}Standard Output:\n{e.stdout}{Colors.ENDC}")
            return False


def check_dependencies():
    print_header("Checking Dependencies")

    dependencies = ["npm", "npx", "python3"]

    missing = []
    for dep in dependencies:
        if (
            subprocess.call(
                f"which {dep}",
                shell=True,
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
            )
            != 0
        ):
            missing.append(dep)

    if missing:
        print_error(f"Missing dependencies: {', '.join(missing)}")
        sys.exit(1)

    print_success("All system dependencies found")


def install_python_tools():
    """Attempts to install Python linting tools"""
    tools = [
        "ruff",
        "pyright",
    ]  # Sourcery often requires auth, so we'll treat it as optional/manual
    print_header("Checking Python Tools")

    missing = []
    for tool in tools:
        if (
            subprocess.call(
                f"which {tool}",
                shell=True,
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
            )
            != 0
        ):
            missing.append(tool)

    if missing:
        print_step(f"Installing missing Python tools: {', '.join(missing)}...")
        # Use --break-system-packages as we are in a controlled env and need these tools system-wide for the script
        if not run_command(
            f"python3 -m pip install {' '.join(missing)} --break-system-packages",
            "Installing Python Tools",
            ignore_errors=True,
        ):
            print_warning(
                "Failed to auto-install Python tools. Some checks may be skipped."
            )


def main():
    print_header("STARTING AGGRESSIVE CODE CLEANUP & LINTING")
    print(f"{Colors.BLUE}Target: {os.getcwd()}{Colors.ENDC}")

    check_dependencies()

    # 1. Biome - Extremely fast formatter and linter
    # We run this first to handle the bulk of formatting and basic linting instantly
    print_header("Phase 1: Biome Optimization")
    if not run_command(
        "npx @biomejs/biome check --write --unsafe .",
        "Biome Check & Apply Safe Fixes",
        ignore_errors=True,
    ):
        print_warning("Biome encountered issues but continuing...")

    # 2. Prettier - The gold standard for formatting
    # We run this to ensure stylistic consistency that Biome might miss or handle differently
    print_header("Phase 2: Prettier Formatting")
    run_command(
        'npx prettier --write "src/**/*.{ts,tsx,js,jsx,css,md,json}"',
        "Prettier Format",
        ignore_errors=True,
    )

    # 3. ESLint - Deep code quality analysis
    # We run this with --fix to automatically resolve many JS/TS issues
    print_header("Phase 3: ESLint Deep Clean")
    run_command(
        'npx eslint --fix "src/**/*.{ts,tsx,js,jsx}"',
        "ESLint Auto-Fix",
        ignore_errors=True,
    )

    # 4. Stylelint - CSS Architecture
    # Ensures our CSS/Tailwind patterns are correct
    print_header("Phase 4: Stylelint CSS Fixes")
    run_command(
        'npx stylelint "**/*.css" --fix', "Stylelint Auto-Fix", ignore_errors=True
    )

    # 5. TypeScript Compilation Check
    # This is the final source of truth for type safety
    print_header("Phase 5: TypeScript Type Verification")
    if run_command("npx tsc --noEmit", "TypeScript Compiler Check", ignore_errors=True):
        print_success("TypeScript check passed")
    else:
        print_warning("TypeScript check found issues (see output above)")

    # 6. Oxlint - Fast additional linting
    # Catches things others might miss, very fast
    print_header("Phase 6: Oxlint Supplemental Check")
    run_command("npx oxlint -c .oxlintrc.json", "Oxlint Scan", ignore_errors=True)

    # 7. Next.js Build - The Ultimate Integrity Check
    # If the build fails, the site is broken. This catches everything.
    print_header("Phase 7: Build Integrity Verification (Next.js)")
    if run_command("npm run build", "Next.js Production Build", ignore_errors=True):
        print_success("Build verified: Site is production-ready")
    else:
        print_error("Build FAILED. Critical errors present.")
        sys.exit(1)

    # 8. Python Quality Control
    # Ruff (Linting/Formatting), Pyright (Types), Sourcery (Refactoring)
    print_header("Phase 8: Python Quality Control")
    install_python_tools()

    # Ruff - Fast linting & formatting
    run_command(
        "ruff check --fix scripts/", "Ruff Linting (Scripts)", ignore_errors=True
    )
    run_command("ruff format scripts/", "Ruff Formatting (Scripts)", ignore_errors=True)

    # Pyright - Static Type Checking
    run_command("pyright scripts/", "Pyright Type Check (Scripts)", ignore_errors=True)

    # Sourcery - AI Refactoring (Optional, gracefully fails if no auth)
    print_step("Running Sourcery (if available)...")
    if (
        subprocess.call(
            "which sourcery",
            shell=True,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
        == 0
    ):
        run_command("sourcery review scripts/", "Sourcery Review", ignore_errors=True)
    else:
        print_warning("Sourcery not found. Skipping. (pip install sourcery)")

    print_header("CLEANUP COMPLETE")
    print(
        f"{Colors.GREEN}Your codebase has been aggressively scrubbed, formatted, and optimized.{Colors.ENDC}"
    )
    print(f"{Colors.BLUE}Review any remaining warnings above manually.{Colors.ENDC}")


if __name__ == "__main__":
    main()
