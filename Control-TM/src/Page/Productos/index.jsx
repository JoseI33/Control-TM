import './index.css'
import Card from "../../components/Card"

const Product = () => {
    
   return (
    <div className='container'>
        <h1 className='heanding'>Repuestos</h1>
        <div className='grid-container'>
        <Card title='Correas' description='Stock de correas del depósito.' />
        <Card title='Mangueras'description='Stock de mangueras del depósito.' />
        <Card title='Rodamientos'description='Stock de rodamientos del depósito.' />
        <Card title='Retenes'description='Stock de retenes del depósito.' />
        <Card title='Filtros'description='Stock de filtros del depósito.' />
        <Card title='Torneria'description='Stock de torneria del depósito.' />
        </div>
    </div>



)
}

export default Product