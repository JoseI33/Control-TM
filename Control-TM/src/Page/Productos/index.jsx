import './index.css'
import Card from "../../components/Card"

const Product = () => {
    
   return (
    <div className='product-container'>
        <h1 className='product-title'>Repuestos</h1>
        <div className='product-grid'>
        <Card 
        title='Correas' 
        description='Stock de correas.'
        imageURL={'https://res.cloudinary.com/dsolw4c9p/image/upload/v1734544952/Productos-Correas-Industriales-Gates-00_wsbtbw.jpg'} 
        />
        <Card 
        title='Mangueras'
        description='Stock de mangueras.' 
        imageURL={'https://res.cloudinary.com/dsolw4c9p/image/upload/v1734545024/R_mroahp.jpg'}
        />
        <Card 
        title='Rodamientos'
        description='Stock de rodamientos.' 
        imageURL={'https://res.cloudinary.com/dsolw4c9p/image/upload/v1734545146/OIP_gyv84r.jpg'}
        />
        <Card 
        title='Retenes'
        description='Stock de retenes.' 
        imageURL={'https://res.cloudinary.com/dsolw4c9p/image/upload/v1734545232/retenes-brr-min_t2pqfe.jpg'}
        />
        <Card 
        title='Filtros'
        description='Stock de filtros.' 
        imageURL={'https://res.cloudinary.com/dsolw4c9p/image/upload/v1734545413/OIP_1_u14rdi.jpg'}
        />
        <Card 
        title='Torneria'
        description='Stock de torneria.' 
        imageURL={'https://res.cloudinary.com/dsolw4c9p/image/upload/v1734545545/icono-torno-isometrico-icono-vector-torno-diseno-web-aislado-sobre-fondo-blanco_96318-55390_z9dypv.jpg'}
        />
        </div>
    </div>



)
}

export default Product