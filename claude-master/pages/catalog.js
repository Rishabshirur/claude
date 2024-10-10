import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; 


export default function Catalog() {
  const [explanations, setExplanations] = useState([]);
  const [sortBy, setSortBy] = useState('name');
  const router = useRouter(); 

  useEffect(() => {
    const fetchExplanations = async () => {
      const res = await fetch('/api/getExplanations');
      const data = await res.json();
      setExplanations(data);
    };

    fetchExplanations();
  }, []);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const sortedExplanations = [...explanations].sort((a, b) =>
    a[sortBy].localeCompare(b[sortBy])
  );

  const handleGoBackToAI = () => {
    router.push('/'); // Navigate to the catalog page
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Explanation Catalog</h1>
      <br />
      <button onClick={handleGoBackToAI} style={styles.catalogButton}>
        Back
      </button>

      <label style={styles.label}>
        Sort by:
        <select value={sortBy} onChange={handleSortChange} style={styles.select}>
          <option value="name">Name</option>
          <option value="topic">Topic</option>
        </select>
      </label>

      <table style={styles.table}>
        <thead>
          <tr style={styles.headerRow}>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Topic</th>
            <th style={styles.th}>Explanation</th>
          </tr>
        </thead>
        <tbody>
          {sortedExplanations.length==0 ? <h2>Nothing to display</h2> : sortedExplanations.map((exp) => (
            <tr key={exp._id} style={styles.tr}>
              <td style={styles.td}>{exp.name}</td>
              <td style={styles.td}>{exp.topic}</td>
              <td style={styles.explanationCell}>{exp.explanation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f4f4f9',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1200px',
    margin: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
  },
  label: {
    fontSize: '1.1rem',
    marginBottom: '20px',
    display: 'block',
    textAlign: 'center',
  },
  select: {
    padding: '8px',
    fontSize: '1rem',
    borderRadius: '5px',
    marginLeft: '10px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  headerRow: {
    backgroundColor: '#3b5998',
    color: 'white',
  },
  th: {
    padding: '10px 15px',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    borderBottom: '2px solid #ddd',
  },
  tr: {
    borderBottom: '1px solid #ddd',
    transition: 'background-color 0.2s ease',
  },
  td: {
    padding: '12px 15px',
    fontSize: '1rem',
    color: '#333',
  },
  explanationCell: {
    padding: '12px 15px',
    fontSize: '0.9rem',
    color: '#666',
    maxWidth: '400px',
    wordWrap: 'break-word',
  },
  trHover: {
    backgroundColor: '#f2f2f2',
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
};
