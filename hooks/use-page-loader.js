// hooks/usePageLoader.ts
export default function usePageLoader() {
  const bodyClass = "page-loading";

  return (status) => {
    document.body.classList.toggle(bodyClass, status);
  };
}
