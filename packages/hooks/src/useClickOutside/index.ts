/**
 * Provides a hook to detect when a user clicks outside a component.
 * @param callback - the function to call when user clicks outside of the referenced component.
 * @returns a ref to be applied to the target element.
 */
// TODO: flexible pass the active envent at document true/false

import * as React from "react";

const useClickOutside = (callback: (e: Event) => void): React.RefObject<any> => {
  // Set-up the reference that'll be used to refer to the component.
  const ref = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    // Called by the event listener below.
    const handleClick: EventListener = event => {
      // Not clicked on this component nor its children.
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      callback(event);
    };

    // Create event listener when mounting the component.
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);
    return () => {
      // Destroy event listener when unmounting the component.
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, [ref, callback]);

  return ref;
};

export default useClickOutside;
