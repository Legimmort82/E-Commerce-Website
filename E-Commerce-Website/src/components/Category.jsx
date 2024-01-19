
const Category = ({image,name}) => {
  return (
    <div className="w-[170px] h-[145px] rounded border flex flex-col gap-4 items-center justify-center">
        <img src={image} alt="" />
        <p>{name}</p>
    </div>
  )
}

export default Category