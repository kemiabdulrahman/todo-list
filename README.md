# SvelteKit Todo App

A modern, feature-rich todo list application built with SvelteKit, showcasing best practices in web development.

## Features

- **Full CRUD Operations**: Create, read, update, and delete todos
- **Real-time Statistics**: Dashboard showing total, active, and completed todos
- **Smart Filtering**: Filter todos by all, active, or completed status
- **Local Storage Persistence**: Automatically saves and restores todos
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Type Safety**: Built with TypeScript for enhanced code quality
- **Modern UI/UX**: Clean, intuitive interface with smooth animations

## Tech Stack

- **SvelteKit** - Modern web framework
- **TypeScript** - Type-safe development
- **Svelte Stores** - Reactive state management
- **CSS3** - Modern styling with animations
- **LocalStorage API** - Client-side data persistence

## Project Structure

```
src/
├── lib/
│   ├── components/          # Reusable Svelte components
│   │   ├── TodoInput.svelte # Input form for new todos
│   │   ├── TodoList.svelte  # List container for todos
│   │   ├── TodoItem.svelte  # Individual todo item
│   │   ├── TodoFilters.svelte # Filter buttons
│   │   └── TodoStats.svelte # Statistics dashboard
│   ├── stores/              # State management
│   │   ├── todoStore.ts     # Basic store implementation
│   │   └── persistentTodoStore.ts # Store with localStorage
│   ├── types/               # TypeScript definitions
│   │   └── todo.ts          # Todo-related types
│   └── utils/               # Utility functions
│       └── localStorage.ts  # LocalStorage helpers
├── routes/                  # SvelteKit routes
│   ├── +layout.svelte       # Root layout with navigation
│   ├── +page.svelte         # Home page with todo app
│   ├── about/
│   │   └── +page.svelte     # About page
│   └── api/
│       └── todos/           # API endpoints (demo)
│           ├── +server.ts   # CRUD API routes
│           └── stats/
│               └── +server.ts
├── app.css                  # Global styles
└── app.html                 # HTML template
```

## Key Concepts Demonstrated

### 1. Component Architecture
- Modular, reusable components
- Props and event handling
- Two-way data binding
- Conditional rendering

### 2. State Management
- Writable stores for mutable state
- Derived stores for computed values
- Store subscriptions and reactivity
- Custom store methods

### 3. TypeScript Integration
- Type-safe component props
- Interface definitions for data models
- Generic types for flexibility
- Type inference

### 4. Routing
- File-based routing system
- Nested layouts
- Multiple pages
- API routes

### 5. Persistence
- LocalStorage integration
- Automatic save/load
- Data serialization
- Error handling

### 6. User Experience
- Inline editing (double-click to edit)
- Keyboard shortcuts (Enter/Escape)
- Smooth transitions
- Empty states
- Loading states

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd todo-list
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run type checking
- `npm run lint` - Check code formatting
- `npm run format` - Format code with Prettier

## Building for Production

```bash
npm run build
```

The build output will be in the `build` directory, ready to be deployed to any static hosting service.

## API Routes (Demo)

The project includes example API routes to demonstrate SvelteKit's server-side capabilities:

- `GET /api/todos` - Fetch all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos` - Update a todo
- `DELETE /api/todos` - Delete a todo
- `GET /api/todos/stats` - Get statistics

## Best Practices Highlighted

1. **Separation of Concerns**: Clear separation between components, stores, and utilities
2. **Type Safety**: Comprehensive TypeScript types throughout the application
3. **Accessibility**: Proper ARIA labels and semantic HTML
4. **Performance**: Efficient reactivity with Svelte's compiler
5. **Code Organization**: Logical folder structure and file naming
6. **Error Handling**: Graceful error handling in localStorage operations
7. **Responsive Design**: Mobile-first approach with flexible layouts
8. **Code Quality**: Prettier formatting and consistent code style

## Features Showcase

### Store Pattern
The application demonstrates both basic and persistent store implementations, showing how to extend Svelte's store functionality.

### Derived Stores
Filtered todos and statistics are computed using derived stores, automatically updating when dependencies change.

### Component Composition
Small, focused components are composed to build complex UIs while maintaining reusability.

### TypeScript Integration
Full type safety from data models to component props, catching errors at compile time.

## License

MIT

## Author

Built to showcase SvelteKit development expertise.
