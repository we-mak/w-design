# Change log

All notable changes to this project will be documented in this file.

Check [RELEASE](https://github.com/we-mak/w-design/releases)

## CONSIDER

- ❌ None-official: https://github.com/cristianbote/goober
- ❌ Styled-components passing props https://github.com/styled-components/styled-components/pull/3006

--

### v1.0.0

- ❌ **Popover**
- ❌ **Pagination**
- ❌ **Actions**
- ❌ **Tooltip**
- ❌ **Generic styles**

---

### v0.49.5

- **Chip** Small block of entities, useful for tagging.
- **Toggle**
- **PushMessage**: fix https://github.com/we-mak/w-design/issues/149
- **Duplicate images**: https://github.com/we-mak/w-design/issues/196
- **Image**

  - Add loading props default to `lazy`
  - Use `width`, `height` attribute support for prevent content layout shift (CLS)
  - Fixed https://github.com/we-mak/w-design/issues/203

- Upgrade new packages

--
``

### v0.47.0

- ✅ #144 **Steps**
- ✅ allow name attribute for button

---

### v0.46.0

- Refactor `Upload` to have state management at the top level
- [Bug] Failed to execute 'unobserve' on 'IntersectionObserver': parameter 1 is not of type 'Element'.
- Resolve #138

---

#### Hooks v0.42.0

- ✅ `useDragging`

#### Upload v0.43.1

- ✅ Export `xhrRequest` upload

#### Form v0.44.0

- ✅ `InputRange` one knobs

#### Core v0.45.6

- ✅ `Dropdown` Close menu when click on menu
- ✅ `Badge`: Fix max number when `number` is higher than `maxCount`
- ✅ Add column flexbox properties from `styled-system`
- ✅ Add synthetic event for `MenuItem`.
- ✅ Add `Button` min-width depends on height.

---

### Upload v0.42.0

- ✅ `Upload` XMLHttpRequest to support server side render

---

### Core package v0.45

- ✅ Remove box-shadow for disabled `Button`
- ✅ `List`: Add children props
- ✅ Change `EmptyView` icon
- ✅ Fix `Portal` on ssr

---

### Form v0.43.0

- ✅ Add `FormFooter`
- ✅ `useForm` hooks: Change `formErrorMessage` to `formMessage`

---

### Core package v0.44.3

- ✅ `Collapse`
- ✅ `Badge`
- ✅ `Tabs`
- ✅ Inherit `SubMenu` with `Collapse` component
- ✅ add `tagRef` props to `CustomTag`
- ✅ Improve development exeprience with hot reload setup
- ✅ Fixed https://github.com/we-mak/w-design/issues/56
- ✅ Update modal types

---

### v0.42.0

Split code at bundling packages:

- Replace rollup with `babel`,`tsc` build.
- Update documents
- Some minor tweaks

---

### v0.41.0

- ✅ Switch to monorepo
- ✅ Fixed https://github.com/we-mak/w-design/issues/54

---

<a name="0.37.4"></a>#[v0.37.4]()

#### Changes

- ✅ `EmptyView`
- ✅ `Box`
- ✅ Basic List upload `Upload`
- ✅ Replace `useLayoutEffect`
- ✅ Fix `Button` prevent onClick when loading
- ✅ Fix `List` responsive, moved to components directory
- ✅ Remove hooks from main package
- ✅ Refactor `Spinner`
- ✅ Refactor utils, `Button`
- ✅ Remove trim value at `useField`

---

<a name="0.34"></a>#[v0.34]()

- `ImageRatio`
- `List`

#### Add Hooks

- `useField`
- `useForm`

---

<a name="0.29.5-alpha"></a>#[v0.29.5-alpha]()

### Update

- `align-self: center` to `AvatarContent` of `AvatarGroup`
- set `fluid` prop for `TextArea`
- `Typo`: fix heading typo consist with origin heading tag, add `margin, fontWeight, fontFamily` props
- `Image`: add `width, height` props
- `Picture`: add `width, height` props
- fix `InputForm` icon position

### Add new features

- `Comment`
- `Breadcrubms`
- `Masonry`
- `PushMessage`
- `AnchorScroll`
- `SectionMessage`
- `ProgressLoader`

---

<a name="0.22.4"></a>#[v0.22.4]()

- Split out normalize css
- Update toggle Drawer perf
- Move `Dropdown` rest props to button props
- Set remain props dropdown style to button props

---

<a name="0.22.0"></a>#[v0.22.0]()

- Fix Drawer `document` undefined at server side render
- `Navbar` Add responsive show hide on `NavSection`

---

<a name="0.22.0-beta"></a>#[v0.22.0-beta]()

### Features

- Add `Label`
- Add `Image` with IntersectionObserver lazy load
- Add `Picture` in herit from `Image`
- Add `Drawer`
- Update `Avatar` with lazy loading image
- Update card image with lazy loading

---

<a name="0.8.0-alpha"></a>#[v.0.8.0-alpha]()

Migrate all with React Hook

- Add `display` props Container
- Remove **Hide** component

---

<a name="0.7.0"></a>#[v.0.7.0]()

### Features

- ThemeProvider
- Heading
- Button
- Spinner

---

<a name="0.3.3"></a> #[v.0.3.3](https://github.com/we-mak/w-design/compare/hotfix/0.3.2...master)

### Features

- Grid layout
- Container
- Hide component
