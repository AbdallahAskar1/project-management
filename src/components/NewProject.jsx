import { useRef } from "react";
import Input from "./Input";

function NewProject({addProject}) {
  const title=useRef()
  const description=useRef()
  const dueDate=useRef()

  function handleSave() {
    const enteredTitle =title.current.value;
    const enteredDescription= description.current.value;
    const enterdDueDate = dueDate.current.value;
    const projectData = {
      title:enteredTitle,
      description:enteredDescription,
      dueDate:enterdDueDate
    }
    addProject(projectData)

  }
  return (
    <div className="w-[35rem] mt-16 ">
      <menu className="flex items-center justify-end gap-4 my-4 ">
        <li>
          <button  className="text-stone-800 hover:text-stone-950 ">Cancel</button>
        </li>
        <li>
          <button onClick={handleSave} className="bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md px-6 py-2 ">Save</button>
        </li>
      </menu>
        <Input ref={title} label={"Title"}  />
        <Input ref={description}  label={"Description"}  textarea/>
        <Input ref={dueDate} label={"Due Date"}  />
    </div>
  );
}

export default NewProject;
