const PokeTitle: React.FC<{ title: string, colorBase: React.CSSProperties }> = ({ title, colorBase }) => {
  return (
    <div className='poke-card--body-about'>
      <p className='title' style={colorBase}>{title}</p>
    </div>
  )
}

export default PokeTitle
