'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Pastebin from '../../components/Pastebin';

function Page({ params }: { params: { url: string } }) {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('Untitled file');
    const [oAuthToken, setOAuthToken] = useState<string | null>(null);
    const [isDataFetched, setIsDataFetched] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem('token');
      setOAuthToken(token);
    }, []);

    useEffect(() => {
      if (!oAuthToken) return;

      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/v1/pastebin/${params.url}`, {
            headers: {
              'Authorization': `Bearer ${oAuthToken}`
            }
          });
          console.log('Fetched data:', response.data);
          
          if (!response.data || !response.data.data || !response.data.data.pastebin) {
            throw new Error('Invalid response structure');
          }

          const { pastebin } = response.data.data;
          setTitle(pastebin.title);
          setContent(pastebin.content);
          setIsDataFetched(true); // Set isDataFetched to true after data is fetched
          console.log(title);
          console.log(content);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }, [params.url, oAuthToken]);

    return (
      isDataFetched ? <Pastebin initialContent={content} initialTitle={title} /> : <div>Loading...</div>
    );
}

export default Page;