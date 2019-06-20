import { graphql , useStaticQuery } from 'gatsby';

const useInstagram = () => {

    const data = useStaticQuery(graphql`
    query {
        allInstaNode(limit: 9){
          nodes{
            id,
            caption,
            username
            localFile{
              sharp: childImageSharp{
                fluid(maxWidth: 120 maxHeight: 120){
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
    }
    
    `)

    return data.allInstaNode.nodes.map(node=>({
        ...node.localFile.sharp,
        id: node.id,
        caption: node.caption,
        username: node.username
    }))
}

export default useInstagram;