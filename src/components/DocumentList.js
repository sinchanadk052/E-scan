import React, { useEffect, useState } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL|| "http://localhost:5000";

function DocumentList() {
  const [documents, setDocuments] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const res = await axios.get(`${API}/documents`);
      setDocuments(res.data);
    } catch (error) {
      console.error("Error fetching documents:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/delete-document/${id}`);
      fetchDocuments();
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  const handleEdit = (doc) => {
    setEditingId(doc._id);
    setEditData(doc.scannedDetails || {});
  };

  const handleSave = async (id) => {
    try {
      await axios.put(`${API}/update-scanned-details/${id}`, {
        scannedDetails: editData,
      });

      setEditingId(null);
      fetchDocuments();
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Scanned Documents</h2>

      {documents.length === 0 ? (
        <p>No documents found.</p>
      ) : (
        documents.map((doc) => (
          <div
            key={doc._id}
            style={{
              border: "1px solid #ccc",
              marginBottom: "15px",
              padding: "10px",
            }}
          >
            <p>
              <strong>Type:</strong> {doc.type}
            </p>

            {doc.filePath && (
              <img
                src={`${API}/${doc.filePath}`}
                alt="Document"
                style={{ maxWidth: "200px" }}
              />
            )}

            <br />

            {editingId === doc._id ? (
              <>
                {Object.entries(editData).map(([key, value]) => (
                  <div key={key}>
                    <label>{key}: </label>

                    <input
                      value={value}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          [key]: e.target.value,
                        })
                      }
                    />
                  </div>
                ))}

                <button onClick={() => handleSave(doc._id)}>Save</button>

                <button onClick={() => setEditingId(null)}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <ul>
                  {Object.entries(doc.scannedDetails || {}).map(
                    ([key, value]) => (
                      <li key={key}>
                        <strong>{key}:</strong> {value}
                      </li>
                    )
                  )}
                </ul>

                <button onClick={() => handleEdit(doc)}>
                  Edit
                </button>

                <button onClick={() => handleDelete(doc._id)}>
                  Delete
                </button>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default DocumentList;