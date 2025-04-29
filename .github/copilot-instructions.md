# GitHub Copilot Instructions: React Three Fiber (R3F) Best Practices

This document outlines rules and best practices for writing React Three Fiber (R3F) code. GitHub Copilot should adhere to these guidelines when generating suggestions.

**ALWAYS** Use a react three fiber version of a component before a three.js version for the same functionality, R3F docs: https://r3f.docs.pmnd.rs/getting-started/introduction
**ALWAYS** Use a drei component before developing a new component for the same functionality: drei docs: https://drei.docs.pmnd.rs/getting-started/introduction

## 1. Core Principles

* **Declarative Approach:** Embrace R3F's declarative nature. Define scenes using JSX components rather than imperative Three.js code wherever possible.
* **Functional Components & Hooks:** Exclusively use functional components and React Hooks. Avoid class components.
* **Leverage R3F Abstractions:** Prefer R3F built-in components (`<mesh>`, `<group>`, `<spotLight>`, etc.) and hooks (`useFrame`, `useThree`, `useLoader`) over direct Three.js API calls unless necessary for performance or specific features not abstracted by R3F.

## 2. Component Structure

* **Small, Reusable Components:** Break down complex scenes into smaller, reusable components.
* **Clear Prop Names:** Use descriptive and clear prop names for component inputs.
* **Props Spreading:** Use prop spreading (`{...props}`) cautiously. Prefer explicit prop passing for clarity, especially for fundamental Three.js object properties (e.g., `position`, `rotation`, `scale`).

## 3. R3F Hooks

* **`useThree`:** Access the R3F state (scene, camera, gl renderer, size, etc.) via `useThree`. Destructure only what's needed. Avoid calling it excessively in deep component trees; pass state down via props where appropriate.
* **`useFrame`:** Use `useFrame` for animations and updates occurring every frame.
    * Keep `useFrame` logic concise and performant.
    * Access state via `useRef` or component props/state rather than repeatedly calling `useThree` inside the loop.
    * Leverage the `delta` and `clock` arguments for time-based animations.
    * Conditionally execute logic within `useFrame` if it doesn't need to run every single frame.
* **`useLoader`:** Use `useLoader` for loading assets (textures, models, etc.).
    * Always wrap `useLoader` calls with `React.Suspense` further up the component tree to handle loading states gracefully.
    * Provide the correct loader type (e.g., `TextureLoader`, `GLTFLoader`).
    * Memoize loader results implicitly (R3F handles this) but be mindful of triggering re-loads.

## 4. State Management

* **Local State:** Use `useState` and `useRef` for component-local state (e.g., interaction states, animation toggles). Use `useRef` for direct access to Three.js objects when necessary (`meshRef.current.rotation.x += 0.01`).
* **Shared State:** For complex state shared across multiple components, consider:
    * **Prop Drilling:** Suitable for shallow component trees.
    * **React Context:** Good for state accessible by many components without deep nesting.
    * **External State Managers (Zustand, Jotai):** Recommended for complex applications. Zustand is often preferred in the R3F ecosystem for its simplicity and performance.

## 5. Performance Optimization

* **Instancing:** Use `<Instances>` and `<Instance>` for rendering large numbers of identical objects (e.g., particles, trees).
* **Geometry Merging:** For static scenes with many meshes using the same material, consider merging geometries manually or using utility libraries if appropriate (though often R3F's structure makes this less critical than in pure Three.js).
* **Draw Calls:** Be mindful of draw calls. Use shared materials where possible.
* **Level of Detail (LOD):** Implement LODs (`<Detailed>`) for complex models viewed at varying distances.
* **Avoid Unnecessary Re-renders:** Use `React.memo` for components that render complex static geometry and only need to update when specific props change.
* **Throttling/Debouncing:** Throttle or debounce expensive calculations within `useFrame` or event handlers if they don't need to run at the full frame rate.
* **Texture Optimization:** Use appropriate texture sizes and compression formats (e.g., KTX2/Basis).

## 6. Code Style & Maintainability

* **Naming Conventions:** Use clear, descriptive names for components, variables, and functions (e.g., `RotatingBox`, `useOrbitControlsState`).
* **Comments:** Add comments to explain complex logic, `useFrame` updates, or non-obvious R3F patterns.
* **TypeScript:** Strongly prefer TypeScript for type safety, better autocompletion, and easier refactoring. Use types provided by `@react-three/fiber` and `@react-three/drei`.
* **`@react-three/drei`:** Utilize helpers and abstractions from `@react-three/drei` for common tasks (controls, shapes, shaders, performance monitors, etc.) to avoid boilerplate code.

## 7. Event Handling

* **R3F Event System:** Use R3F's built-in pointer events (`onPointerDown`, `onPointerMove`, `onClick`, etc.) attached directly to mesh components. They handle raycasting automatically.
* **Event Data:** Access event data (intersection points, distance, object clicked) from the event argument passed to the handler.

## 8. Error Handling

* **Suspense Fallbacks:** Provide meaningful fallbacks for `<Suspense>` boundaries used with `useLoader`.
* **Error Boundaries:** Wrap sections of your R3F scene or the entire `<Canvas>` with React Error Boundaries to catch rendering errors gracefully.
