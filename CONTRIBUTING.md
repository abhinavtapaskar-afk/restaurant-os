# Contributing to RestaurantOS

Thank you for your interest in contributing to RestaurantOS! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/abhinavtapaskar-afk/restaurant-os/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Your environment (OS, browser, Node version)

### Suggesting Features

1. Check existing [Issues](https://github.com/abhinavtapaskar-afk/restaurant-os/issues) for similar suggestions
2. Create a new issue with:
   - Clear description of the feature
   - Use cases and benefits
   - Possible implementation approach

### Pull Requests

1. Fork the repository
2. Create a new branch: \`git checkout -b feature/your-feature-name\`
3. Make your changes
4. Write or update tests if needed
5. Ensure all tests pass: \`pnpm test\`
6. Commit with clear messages: \`git commit -m "Add feature: description"\`
7. Push to your fork: \`git push origin feature/your-feature-name\`
8. Create a Pull Request

## Development Setup

1. Clone your fork:
\`\`\`bash
git clone https://github.com/YOUR_USERNAME/restaurant-os.git
cd restaurant-os
\`\`\`

2. Install dependencies:
\`\`\`bash
pnpm install
\`\`\`

3. Set up environment variables (see README.md)

4. Run development server:
\`\`\`bash
pnpm dev
\`\`\`

## Coding Standards

### TypeScript
- Use TypeScript for all new files
- Define proper types, avoid \`any\`
- Use interfaces for object shapes

### React
- Use functional components with hooks
- Keep components small and focused
- Use proper prop types

### Styling
- Use Tailwind CSS utility classes
- Follow existing component patterns
- Ensure responsive design

### Code Style
- Run \`pnpm lint\` before committing
- Use Prettier for formatting
- Follow existing code patterns

## Commit Messages

Follow conventional commits:
- \`feat: add new feature\`
- \`fix: resolve bug\`
- \`docs: update documentation\`
- \`style: formatting changes\`
- \`refactor: code restructuring\`
- \`test: add or update tests\`
- \`chore: maintenance tasks\`

## Testing

- Write tests for new features
- Ensure existing tests pass
- Test on multiple browsers
- Test responsive design

## Documentation

- Update README.md if needed
- Add JSDoc comments for functions
- Update relevant documentation files

## Questions?

Feel free to:
- Open an issue for discussion
- Email: abhinavtapaskar@gmail.com

Thank you for contributing! 🎉
