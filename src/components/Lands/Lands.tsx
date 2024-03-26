import Form from './Form';
import './Lands.scss';

type LandsType = {
  id: string;
}

const Lands = ({ id }: LandsType) => {
  return (
    <div id={id} className='c-lands'>
      <div className='c-content'>
        <h2>Ofrece lotes</h2>
        <h3>¿Tienes un lote en venta?</h3>
        <p>Nosotros podríamos comprártelo. Por favor, registra tus datos y cuéntanos un poco sobre el lote, si tienes imágenes de referencia y posición ¡mucho mejor!.</p>
      </div>
      <Form />
    </div>
  )
}

export default Lands