# Client Images Directory

Place all client-provided images in this directory. 

Once images are added here, update the paths in `/assets/images.ts` to point to these local files.

For example, if you add `hero-bg.jpg` to this folder, update `assets/images.ts`:
```typescript
export const IMAGES = {
  hero: "/images/hero-bg.jpg",
  // ...
}
```
