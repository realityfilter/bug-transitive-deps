# libb

This library was generated with [Nx](https://nx.dev).

- `npx create-nx-workspace trans-dep`
- `npm install -D @nxext/vite`
- `nx g lib liba`
- `nx g lib libb`
- `nx g @nxext/vite:application app`

- `nx serve app`
  Resulting in

      The following dependencies are imported but could not be resolved:

      @trans-dep/libb (imported by /Users/vb/Desktop/nx-vite-dep/trans-dep/packages/liba/src/lib/liba.ts)

      Are they installed?
      Error: The following dependencies are imported but could not be resolved:

       @trans-dep/libb (imported by /Users/vb/Desktop/nx-vite-dep/trans-dep/packages/liba/src/lib/liba.ts)
