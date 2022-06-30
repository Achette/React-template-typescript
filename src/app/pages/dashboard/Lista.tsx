import { useCallback, useState } from "react";

export const Lista = () => {

  const [lista, setLista] = useState<string[]>(['Teste1', 'Teste2', 'Teste3']);

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
    if(e.key === 'Enter') {
        if(e.currentTarget.value.trim().length === 0) return

       // lista.push(e.currentTarget.value)
       //  setLista([...lista, e.currentTarget.value])

       const value = e.currentTarget.value
       e.currentTarget.value = ''

       setLista((oldLista) => {

        if(oldLista.includes(value)) return oldLista

        return [...oldLista, value]
       })
    }
  }, [])

  return (
    <div>
      <p>Lista</p>

      <input 
      onKeyDown={handleInputKeyDown}
      />

      <ul>
        {lista.map((value) => {
            return <li key={value}>{value}</li>
        })}
      </ul>
    </div>
  );
};
