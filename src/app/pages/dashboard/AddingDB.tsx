import { useCallback, useState } from "react";

interface ITarefa {
  id: number;
  title: string;
  isCompleted: boolean;
}

export const AddingDB = () => {
  const [list, setList] = useState<ITarefa[]>([]);

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback((e) => {
        if(e.key === 'Enter') {
            if(e.currentTarget.value.trim().length === 0) return

            const value = e.currentTarget.value
            e.currentTarget.value = ''

            setList((oldList) => {
                if(oldList.some((listItem) => listItem.title === value)) return oldList

                return [
                    ...oldList,
                    {
                        id: oldList.length,
                        title: value,
                        isCompleted: false,
                    }
                ]
            })
        }
    }, []);

  return (
    <div>
      <p>Lista do Banco de Dados</p>

      <input onKeyDown={handleInputKeyDown} />

      <p>{list.filter((listItem) => listItem.isCompleted).length}</p>

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
