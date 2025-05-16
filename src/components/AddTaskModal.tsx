import { useRef } from "react";

interface AddTaskModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onCloseRequested: () => void;
}

function AddTaskModal(props: AddTaskModalProps) {
  const dialogueRef = useRef(null);

  interface OverlayClickEvent
    extends React.MouseEvent<HTMLDivElement, MouseEvent> {}

  function handleOverlayClick(e: OverlayClickEvent) {
    if (
      dialogueRef.current &&
      !(dialogueRef.current as HTMLDivElement).contains(e.target as Node)
    ) {
      props.onCloseRequested();
    }
  }

  return props.isOpen ? (
    <div
      onClick={handleOverlayClick}
      className="absolute w-screen h-screen bg-blue-800/10"
    >
      <div
        ref={dialogueRef}
        className="bg-white p-4 rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="flex mb-4">
          <h1 className="font-semibold">New Task</h1>
          <button
            onClick={props.onCloseRequested}
            aria-label="Close"
            className="ml-auto"
          >
            X
          </button>
        </div>
        {props.children}
      </div>
    </div>
  ) : null;
}

export default AddTaskModal;
