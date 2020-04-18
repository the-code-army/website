import { useEffect, useState } from 'react'
export default function StaffMember({ id, name, title}) {
  let url = `/api/avatar?id=${id}`
  let [username, setUsername] = useState(name)

  useEffect(() => {
    async function load() {
      let res = await fetch(`/api/username?id=${id}`);
      let json = await res.json();
      setUsername(json.username);
    }
    if(username == undefined) {
      load()
    }
  }, [])
  return (
    <>
      <style jsx>{`
        .staff-member {
          margin: 1rem 0;
        }
        .staff-member-name {
          font-size: 1.5rem;
        }
        .staff-member-title {
          font-size: 1.25rem;
          opacity: 0.75;
        }
        .staff-member-pfp {
          border-radius: 20%;

          transition: border-radius 0.4s;
        }
        .staff-member-pfp:hover {
          border-radius: 40%;
        }
        @media (min-width: 900px) {
          .staff-member-name {
            font-size: 1.75rem;
          }

          .staff-member-title {
            font-size: 1.5rem;
            opacity: 0.75;
          }
        }
      `}</style>
      <div className="staff-member">
        <img className="staff-member-pfp" src={url} width="128" height="128" />
        <h3 className="staff-member-name">{username}</h3>
        <h4 className="staff-member-title">{title}</h4>
      </div>
    </>
  );
}