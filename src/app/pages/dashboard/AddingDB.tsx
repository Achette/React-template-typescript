import { useCallback, useEffect, useState } from "react";
import { ApiException } from "../../shared/services/api/ApiException";
import { TasksServices } from "../../shared/services/api/tasks/TasksServices";

interface ITarefa {
  id: number;
  title: string;
  isCompleted: boolean;
}

export const AddingDB = () => {

  const [list, setList] = useState<ITarefa[]>([]);

  useEffect(() => {
    TasksServices.getAll()
    .then((result) => {
      if(result instanceof ApiException) {
        alert(result.message)
      } else {
        setList(result)
      }
    })
  }, [])

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback((e) => {
        if(e.key === 'Enter') {
            if(e.currentTarget.value.trim().length === 0) return

            const value = e.currentTarget.value
            e.currentTarget.value = ''

            if(list.some((listItem) => listItem.title === value)) return
            
            TasksServices.create({ title: value, isCompleted: false, })
            .then((result) => {
              if(result instanceof ApiException) {
                alert(result.message)
              } else {
                setList((oldList) => [...oldList, result]
              )
              }
            })
        }
    }, [list]);

  return (
    <div>
      <p>Lista do Banco de Dados</p>

      <input onKeyDown={handleInputKeyDown} />

      <p>Completed tasks: {list.filter((listItem) => listItem.isCompleted).length}</p>

      <ul>
        {list.map((listItem, index) => {
          return (
            <li key={listItem.id}>
              <input
                type="checkbox"
                checked={listItem.isCompleted}
                onChange={() => {
                  setList((oldList) => {
                    return oldList.map((oldListItem) => {
                      const newIsCompleted =
                        oldListItem.title === listItem.title
                          ? !oldListItem.isCompleted
                          : oldListItem.isCompleted;

                      return {
                        ...oldListItem,
                        isCompleted: newIsCompleted,
                      };
                    });
                  });
                }}
              />
              {listItem.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
