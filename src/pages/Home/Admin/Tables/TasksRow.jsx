

const TasksRow = ({task, index}) => {
    return (
        <tr  className="text-center border-t">
                <td className="px-4 py-2">{String(index + 1).padStart(2, '0')}</td>
                <td className="px-4 py-2">{task.name}</td>
                <td className="px-4 py-2">{`${task.date} ${task.time}`}</td>
                <td className="px-4 py-2">
                  <a href={task.location} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Location</a>
                </td>
                <td className="px-4 py-2">{task.employee}</td>
                <td className="px-4 py-2">
                  <span className={`text-${task.statusColor}-500 font-semibold`}>{task.status}</span>
                </td>
              </tr>
    );
};

export default TasksRow;