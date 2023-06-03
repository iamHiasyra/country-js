

function RegionButton({region, onClick}) {
  return (
    <button className=" bg-custom-white text-left  py-1 pl-2 pr-10 last:rounded-b-lg" onClick={onClick}>{region}</button>
  )
}

export default RegionButton