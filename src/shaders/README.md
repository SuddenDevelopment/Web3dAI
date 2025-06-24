# Shaders Directory

This directory contains custom shaders and materials for the Web3dAI project.

## Structure

- `materials/` - Custom material components
- `vertex/` - Vertex shader files (.glsl)
- `fragment/` - Fragment shader files (.glsl)
- `uniforms/` - Shader uniform definitions and helpers

## Usage

Custom shaders should be organized by functionality:

1. Create a new material component in `materials/`
2. Add vertex shaders to `vertex/`
3. Add fragment shaders to `fragment/`
4. Define uniforms in `uniforms/`

## Examples

See the ShadersGallery page for examples of built-in drei materials.
Custom shaders can be added following the same pattern as the existing ShaderSphere component.

## Getting Started

To add a new custom shader:

1. Create your shader files in the appropriate directories
2. Create a material component that uses the shaders
3. Add the material to the ShadersGallery page
4. Test and iterate

The gallery currently showcases various drei materials including:
- Standard materials (Standard, Physical, Toon, Lambert)
- Drei special materials (Wobble, Distort, Matcap)
- Effect materials (Basic, Depth, Wireframe, Transparent)