import moment from 'moment/min/moment-with-locales';
import Comments from './comments/Comments'
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';
import { applyClassesToHTML } from '../../../utils/PostClasses';
import { getCategoryById, getCategoryBySlug } from '../../../features/app/appSlice';

const postw = {
    title: 'CIQ proporciona versiones recientes del kernel para Rocky Linux',
    content: (
        <section>
            <p>Tras el desagradable giro dado por Red Hat en torno a su uso de la licencia GPL, los que fueron clones de RHEL tienen que moverse si quieren seguir siendo productos atractivos para las empresas. Si AlmaLinux ha decidido recuperar soporte de hardware que ha sido descartado por la subsidiaria de IBM, ahora es CIQ, la empresa responsable de Rocky Linux, la que ha anunciado soporte para las versiones estables upstream del kernel Linux.</p>
            <p>Dicho con palabras menos técnicas, CIQ proporcionará para Rocky Linux versiones estables más recientes del kernel Linux a través de su Enterprise Linux Platform. La empresa sostiene su decisión en la mejora del rendimiento, la compatibilidad con el hardware y la seguridad para “los clientes más avanzados”. Todo eso se hará manteniendo una compatibilidad consistente con las aplicaciones y con el foco puesto en plataformas como los procesadores AMD EPYC.</p>
            <p>Gregory Kurtzer, CEO de CIQ, ha explicado que “muchos de nuestros clientes con las cargas de trabajo más exigentes se están dando cuenta de que para obtener el rendimiento, la eficiencia, la compatibilidad de hardware y la seguridad que necesitan, tienen que ejecutar los kernels estables upstream.”</p>
        </section> 
    ),
    image: 'https://www.muylinux.com/wp-content/uploads/2024/04/Rocky-Linux-9.3.webp',
    createdAt: '2024-04-20T18:29:49.023Z',
    category: {
        name: 'Linux',
    },
    author: {
        name: 'Gabriel',
        surname: 'Picco'
    },
    comments: [
        {
            id: 'assdsdsdqw',
            user: {
                name: 'Mario',
                surname: 'Mactas'
            },
            content: 'Muy bueno el programa la radio está buenisima.'
        },
        {
            id: 'sñddjelidjlwejm',
            user: {
                name: 'Rolando',
                surname: 'Hangling'
            },
            content: 'Tras el desagradable giro dado por Red Hat en torno a su uso de la licencia GPL, los que fueron clones de RHEL tienen que moverse si quieren seguir siendo productos atractivos para las empresas.'
        }
    ]
}

const Post = () => {

    const { post } = useSelector((state) => state.posts)


    const category = useSelector((state) => getCategoryById(state, post.category))

    moment.locale('es');

    const fecha_convertida = moment(post.createdAt).format('LL');
    return (
        <>
            <article>
                <h2
                    className="text-2xl italic font-bold"
                >{category.name}</h2>
                <h1
                    className="text-3xl mt-2"
                >{post.title}</h1>
                <div className="flex text-sm gap-2 mt-2 text-slate-600">
                    <span >{post.author.name} {post.author.surname}</span>
                    <span>|</span>
                    <span className='italic'>{fecha_convertida}</span>
                </div>

                <div
                    className="w-full h-64 overflow-hidden mt-3 rounded-md"
                >
                    <img 
                        className=""
                    src={post.image} />
                </div>

                <div
                    className="mt-4 space-y-3"
                >
                    {parse(applyClassesToHTML(post.content))}
                </div>

            </article>
            <Comments post={post} />
            
        </>
    )
}

export default Post