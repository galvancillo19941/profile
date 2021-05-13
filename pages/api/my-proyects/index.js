// import { dataProjects } from '../../../APIDATA/dataProjects'
//
// export default (req, res) => {
//     const httpMethod = req.method;
//     const {slug} = req.body
//
//     switch (httpMethod) {
//         case 'GET':
//             res.status(200).json(dataProjects)
//             break
//         case 'POST':
//             res.status(200).json({
//                 slug: slug
//             })
//             break
//         default:
//             res.setHandlers('Allow', ['GET', 'POST'])
//             res.status(405).end(`Method ${httpMethod} Not Allowed`)
//
//     }
//
//     res.status(200).json(dataProjects)
// }
