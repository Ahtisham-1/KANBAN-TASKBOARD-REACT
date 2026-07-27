interface TaskCardProps {
  title: string;
  description: string;
  tag: string;
}

function TaskCard({ title, description, tag }: TaskCardProps) {
  return (
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
      <span>{tag}</span>
    </div>
  );
}

export default TaskCard;
