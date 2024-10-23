/* eslint-disable react/prop-types */
const InputField = ({ selected, datas,pass, ...rest }) => {
  // const  = prop

  const style =
    " rounded-[0.5rem] border  w-full px-[2rem] py-[0.5rem] outline-none block "

  return (
    <>
      {selected ? (
        <select className={style} {...rest}>
          <option value="">Select option</option>
          {datas.map((data) => (
            <option key={data.id} value={data.value}>
              {data.name}
            </option>
          ))}
        </select>
      ) : (
        <div className="relative">
          <input className={style} {...rest} />
         {pass&&  <div className="absolute bottom-3 right-2 ">eye</div>}
        </div>
      )}
    </>
  )
}

export default InputField
