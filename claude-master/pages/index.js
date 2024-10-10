import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [explanation, setExplanation] = useState('');
  const router = useRouter(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setExplanation('');
    setLoading(true);

    const res = await fetch('/api/generateExplanation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, topic }),
    });

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: streamDone } = await reader.read();
      done = streamDone;

      const chunk = decoder.decode(value, { stream: !done });
      setExplanation((prev) => prev + chunk);
    }

    setLoading(false);
  };

  const handleGoToCatalog = () => {
    router.push('/catalog'); 
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Explain Like I’m 5</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label htmlFor="name" style={styles.label}>Your Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />

        <label htmlFor="topic" style={styles.label}>Topic</label>
        <input
          id="topic"
          name="topic"
          type="text"
          placeholder="Enter a topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          required
          style={styles.input}
        />

        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? 'Loading...' : 'Generate Explanation'}
        </button>
      </form>

      {explanation && (
        <div style={styles.explanationContainer}>
          <h3 style={styles.explanationTitle}>Generated Explanation:</h3>
          <p style={styles.explanationText}>{explanation}</p>
        </div>
      )}

      <button onClick={handleGoToCatalog} style={styles.catalogButton}>
        Go to Catalog
      </button>
    </div>
  );
}

const styles = {
  container: {
    padding: '5vw',
    backgroundColor: '#f4f4f9',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5rem', 
    color: '#333',
    marginBottom: '2vw',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  label: {
    fontSize: '1.2rem',
    marginBottom: '5px',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    fontSize: '1rem',
    backgroundColor: '#3b5998',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  catalogButton: {
    marginTop: '20px',
    padding: '10px',
    fontSize: '1rem',
    backgroundColor: '#3b5998', 
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  explanationContainer: {
    marginTop: '20px',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#fff',
  },
  explanationTitle: {
    fontSize: '1.5rem',
    color: '#333',
  },
  explanationText: {
    fontSize: '1rem',
    color: '#666',
    marginTop: '10px',
  },
};

const mediaQueries = `
  @media (max-width: 600px) {
    .container {
      padding: 10px; // Smaller padding on small screens
    }
    .title {
      font-size: 2rem; // Smaller font size for title
    }
    .label {
      font-size: 1rem; // Smaller label font size
    }
    .input {
      font-size: 0.9rem; // Smaller input font size
    }
    .button,
    .catalogButton {
      font-size: 0.9rem; // Smaller button font size
    }
    .explanationTitle {
      font-size: 1.3rem; // Smaller explanation title font size
    }
    .explanationText {
      font-size: 0.9rem; // Smaller explanation text font size
    }
  }
`;
