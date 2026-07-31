interface TaskCardProps {
  id: number;
  title: string;
  description: string;
  tag: string;
  onDelete: (id: number) => void;
}

function TaskCard({ title, description, tag , id , onDelete }: TaskCardProps) {
  return (
    <div className="taskCardData">
      <h4>{title}</h4>
      <p>{description}</p>
      <span>{tag}</span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default TaskCard;
