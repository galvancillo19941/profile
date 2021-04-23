import { dataProjects } from '../../../APIDATA/dataProjects'

export default async (req, res) => {
    const httpMethod = req.method;
    const {slug} = req.body
    const dataProjectId = req.query.projectId

    const result = dataProjects.filter((project) => project.id === parseInt(dataProjectId))

    switch (httpMethod) {
        case 'GET' :
            if(result.length > 0) {
                res.status(200).json(result[0])
            } else {
                res.status(404).json({ message: `Job with id: ${dataProjectId} not found`})
            }
            break
        case 'PUT':
            res.status(200).json({
                slug: slug
            })
            break
        default:
            res.setHandlers('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${httpMethod} Not Allowed`)
    }
}
