import * as React from "react";

/**
 * credit: https://wstone.io/notes/use-clicked-outside-react-hook/
 * Provides a hook to detect when a user clicks outside a component.
 * @param callback - the function to call when user clicks outside of the referenced component.
 * @returns a ref to be applied to the target element.
 */
// TODO: flexible pass the active envent at document true/false

const useClickOutside = (callback: (e: Event) => void): React.RefObject<any> => {
  // Set-up the reference that'll be used to refer to the component.
  const ref = React.useRef<HTMLElement>(null);

  // Called by the event listener below.
  const handleClick: EventListener = event => {
    // Not clicked on this component nor its children.
    if (!ref.current || !ref.current.contains(event.target as Node)) {
      callback(event);
    }
  };

  React.useEffect(() => {
    // Create event listener when mounting the component.
    document.addEventListener("click", handleClick, true);
    return () => {
      // Destroy event listener when unmounting the component.
      document.removeEventListener("click", handleClick, true);
    };
  }, []); // Pass an empty array as the second paramter to avoid useEffect being re-run on component updates.

  return ref;
};

export default useClickOutside;
