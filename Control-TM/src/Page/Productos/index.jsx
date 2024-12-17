import Card from "../../components/Card"

const Product = () => {
    
   return (
    <div className='px-4'>
        <h1 className='text-3xl font-bold mb-6 text-center text-blue-600'>Repuestos</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
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