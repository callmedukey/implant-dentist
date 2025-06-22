# Project Guidelines

## Motion for React in Next.js 15

### Import Guidelines for Server Components

1. **Server Components**: When using Motion for React in Next.js 15 server components (files without "use client" directive), import the motion object as:
   ```tsx
   import * as motion from "motion/react-client";
   ```

2. **Client Components**: In client components (files with "use client" directive at the top), use the standard import:
   ```tsx
   import { motion } from "motion/react";
   ```

3. **Why**: Next.js 15 server components cannot directly import client-side animation libraries. The "motion/react-client" export is specifically designed for server component compatibility while maintaining full animation functionality.

## CSS and Styling

1. **Tailwind Version**: This project uses Tailwind v4
2. **Unit Preferences**: Use rems over px unless there is an absolute reason to be using px
3. **Arbitrary Values**: If a value is reusable, instead of using arbitrary classnames like `bg-[#fffff]`, you should add it to `globals.css` for reusability
4. **Figma MCP Integration**: After extracting design values from Figma using Figma MCP, always check `globals.css` for existing CSS variables before using arbitrary Tailwind values. This prevents duplication and maintains consistency with the established design system
5. **CSS Variable Usage**: NEVER use CSS variables directly in Tailwind arbitrary values like `bg-[--color-teal-600]`. This is not valid syntax. Instead, either:
   - Use predefined Tailwind classes if available (e.g., `bg-teal-600`)
   - Add the color to the Tailwind config
   - Use inline styles with the CSS variable (e.g., `style={{ backgroundColor: 'var(--color-teal-600)' }}`)

## Responsive Design Implementation

### Figma to Responsive Code Guidelines

When implementing designs from Figma, always adapt them for responsive layouts:

1. **Desktop-First Approach**: Figma designs typically show desktop layouts. Start with the desktop design, then progressively adapt for smaller screens using Tailwind's responsive modifiers

2. **Required Responsive Considerations**:
   - **Typography**: Scale down font sizes for mobile using responsive classes (e.g., `text-4xl md:text-5xl lg:text-6xl`)
   - **Spacing**: Reduce padding and margins on smaller screens (e.g., `p-4 md:p-8 lg:p-12`)
   - **Grid Layouts**: Transform multi-column grids to single columns on mobile (e.g., `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`)
   - **Fixed Widths**: Replace fixed pixel widths with responsive units or max-width constraints (e.g., `w-full max-w-[69.375rem]`)

3. **Common Responsive Patterns**:
   - **Stack on Mobile**: Components shown side-by-side in Figma should stack vertically on mobile
   - **Hide/Show Elements**: Use `hidden md:block` or `block md:hidden` for elements that should only appear on certain screen sizes
   - **Flexible Images**: Ensure images scale properly with their containers
   - **Touch-Friendly**: Increase tap target sizes on mobile (minimum 44x44px)

4. **Breakpoint Strategy**:
   - Mobile: Default (no prefix)
   - Tablet: `md:` (768px+)
   - Desktop: `lg:` (1024px+)
   - Large Desktop: `xl:` (1280px+)

5. **Typography Scaling Guidelines**:
   Maintain consistent text scaling across the project using these patterns:
   
   - **Hero/Primary Headings**:
     - Mobile: `text-3xl` 
     - Tablet: `text-4xl md:text-4xl`
     - Desktop: `text-5xl lg:text-5xl` or `text-6xl lg:text-6xl`
   
   - **Section Headings**:
     - Mobile: `text-2xl`
     - Tablet: `text-3xl md:text-3xl`
     - Desktop: `text-4xl lg:text-4xl`
   
   - **Subsection Headings**:
     - Mobile: `text-lg`
     - Tablet: `text-xl md:text-xl`
     - Desktop: `text-2xl lg:text-2xl`
   
   - **Body Text**:
     - Mobile: `text-base` (default)
     - Tablet/Desktop: `text-base` or `text-lg md:text-lg` for emphasis
   
   - **Small Text/Captions**:
     - Mobile: `text-xs`
     - Tablet/Desktop: `text-sm md:text-sm`
   
   - **Card Titles** (within grid items):
     - Mobile: `text-lg`
     - Tablet: `text-xl md:text-xl`
     - Desktop: `text-2xl lg:text-2xl`

6. **Testing Requirements**: After implementing any Figma design, verify the layout works correctly at:
   - 375px (mobile)
   - 768px (tablet)
   - 1024px (desktop)
   - 1440px (large desktop)

6. **Maximum Screen Width Constraint**: 
   - The project has a defined maximum breakpoint of `95.625rem` (1530px) set in `globals.css` as `--breakpoint-max`
   - Use this constraint when centering content or setting maximum widths: `max-w-[95.625rem]` or `max-w-[--breakpoint-max]`
   - This ensures consistent content width on ultra-wide displays and maintains the design's visual integrity

## Image Handling

### Image Alt Text
Always use Korean (한국어) for image alt text, not English. This ensures consistency with the Korean-language website content and improves accessibility for Korean users.

### Next.js Image Component Best Practices

1. **Import All Images**: Always import images at the top of the component file instead of using string paths

   ```tsx
   import logoImage from "@/public/images/logo.svg";
   import heroImage from "@/public/images/hero.jpg";
   import iconImage from "@/public/images/icon.png";
   ```

2. **General Usage**: Pass the imported image to the Image component with quality set to 100

   ```tsx
   <Image src={heroImage} alt="Description" quality={100} />
   ```

3. **SVG-Specific**: When using SVG images, add the `unoptimized` prop

   ```tsx
   <Image src={logoImage} alt="Description" unoptimized />
   ```

4. **Quality Setting**: Always use `quality={100}` for non-SVG images to maintain maximum image fidelity

5. **Benefits**: Importing images automatically provides width and height values, eliminating the need to specify them manually

### Image Optimization Workflow

1. **Automatic WebP Conversion**: When downloading images from Figma (excluding SVG files), always run them through the optimization script to convert to WebP format:

   ```bash
   node scripts/optimize-images.js path/to/downloaded-image.png
   ```

2. **Script Usage**: The optimization script will:
   - Convert PNG/JPG images to WebP format with 100% quality
   - Skip SVG files automatically
   - Display compression statistics
   - Generate optimized files with `.webp` extension

3. **Workflow**: After downloading images from Figma:
   - Run the optimization script on all non-SVG images
   - Import and use the generated `.webp` files in your components
   - Delete the original PNG/JPG files if no longer needed

4. **Example**:
   ```bash
   # After downloading from Figma
   node scripts/optimize-images.js public/images/hero.png public/images/feature.jpg
   
   # Then in your component
   import heroImage from "@/public/images/hero.webp";
   import featureImage from "@/public/images/feature.webp";
   ```

## Component Architecture Rules

### Metadata Guidelines
**IMPORTANT**: Always add metadata to `page.tsx` files, NOT `layout.tsx` files. This ensures proper SEO optimization for each page.

```tsx
// Correct - in page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title | 조은이플란트치과",
  description: "Page description",
  keywords: "relevant, keywords",
  openGraph: {
    title: "Page Title | 조은이플란트치과",
    description: "Engaging description for social media",
    type: "website",
  },
};
```

### Server vs Client Components
1. **Page files (`page.tsx`) should ALWAYS be server components**
   - Never add "use client" directive to page.tsx files
   - Keep page files as server components for better performance and SEO

2. **Motion components CAN be server components**
   - Components using Motion for React animations do NOT require "use client" directive
   - Motion animations work perfectly fine in server components
   - Import motion as `import * as motion from "motion/react-client"` in server components

3. **Only use "use client" when actually needed**:
   - Components with useState, useEffect, or other React hooks
   - Components with event handlers (onClick, onChange, etc.)
   - Components with browser-only APIs
   - Components that need client-side state management

4. **Component location**:
   - Server components (including Motion-animated ones) can be in `/components` folder
   - Only mark components as client when they have actual client interactivity
   - Don't create unnecessary client components just because they use animations

5. **Example structure**:
   ```
   app/
   └── clinic-tour/
       ├── page.tsx (server component)
       ├── layout.tsx (server component with metadata)
       └── components/
           ├── clinic-section.tsx (server component with Motion animations)
           └── clinic-carousel.tsx (client component with "use client" - has interactive carousel)
   ```

## Animation Guidelines

### Entrance Animations with Scroll Triggers
When implementing entrance animations for page elements, always use scroll-triggered animations with `whileInView` instead of `animate`:

1. **Use `whileInView` for scroll-triggered animations**:
   ```tsx
   <motion.div
     initial={{ opacity: 0, y: 20, scale: 0.95 }}
     whileInView={{ opacity: 1, y: 0, scale: 1 }}
     viewport={{ once: true, margin: "-50px" }}
     transition={{ 
       duration: 0.6, 
       delay: 0.1,
       ease: [0.16, 1, 0.3, 1] 
     }}
   >
   ```

2. **Viewport settings**:
   - Always include `viewport={{ once: true }}` so animations only play once
   - Use negative margins to start animations before elements are fully visible:
     - Sections: `margin: "-100px"`
     - Cards/smaller elements: `margin: "-50px"`

3. **Staggered delays within sections**:
   - Use incremental delays (0.1s, 0.2s, 0.3s, etc.) for elements within the same section
   - This creates a smooth cascading effect as users scroll
   - Reset delays for each new section

4. **Consistent animation properties**:
   - Use the custom ease `[0.22, 1, 0.36, 1]` for elegant, smooth motion
   - Standard durations: 0.8-1s for cards, 1-1.2s for sections
   - Common initial states: `opacity: 0`, `y: 30-60`, `scale: 0.9-0.92`
   - Stagger delays: 0.2s, 0.4s, 0.6s, 0.8s for sequential elements

5. **Hover animations - Use Tailwind CSS instead of Motion**:
   - Prefer Tailwind's hover utilities over Motion's `whileHover`
   - Examples:
     ```tsx
     // ❌ Don't use Motion for hover
     whileHover={{ scale: 1.02 }}
     
     // ✅ Use Tailwind CSS classes
     className="hover:scale-102 transition-transform duration-200"
     className="hover:-translate-y-1 transition-transform duration-200"
     className="hover:shadow-lg transition-shadow duration-300"
     ```
   - Common hover patterns:
     - Scale: `hover:scale-102` or `hover:scale-105`
     - Translate: `hover:-translate-y-1` or `hover:-translate-y-2`
     - Shadow: `hover:shadow-lg` or `hover:shadow-xl`
     - Opacity: `hover:opacity-80` or `hover:opacity-100`
   - Always include `transition-*` classes for smooth animations
