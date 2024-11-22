import GoalIcon from "@/assets/categories/GoalIcon";
import EventIcon from "@/assets/categories/EventIcon";
import TaskIcon from "@/assets/categories/TaskIcon";

const SelectIcon = ({icon, isCompleted}: {icon: string, isCompleted: boolean}) => {
  switch (icon) {
    case "goal":
      return <GoalIcon isCompleted={isCompleted} />;
    case "event":
      return <EventIcon isCompleted={isCompleted} />;
    case "task":
      return <TaskIcon isCompleted={isCompleted} />;
    default:
      return null;
  }
};

export default SelectIcon;
