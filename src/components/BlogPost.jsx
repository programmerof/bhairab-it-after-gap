import { useParams } from 'react-router-dom';
import { createClient } from 'contentful';

function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  const client = createClient({
    space: 'hg1u54oagxq7',
    accessToken: '7CS4_8RGyDCl89YavvuH3GY1QZv6bf5bO0_3pqYnyWw',
  });

  useEffect(() => {
    async function fetchPost() {
      const response = await client.getEntries({
        content_type: 'blogPost',
        'sys.id': id
      });
      setPost(response.items[0]);
    }

    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">{post.fields.title}</h1>
      <p className="text-gray-500">{post.fields.date}</p>
      <div className="mt-4" dangerouslySetInnerHTML={{ __html: post.fields.content }}></div>
    </div>
  );
}

export default BlogPost;
