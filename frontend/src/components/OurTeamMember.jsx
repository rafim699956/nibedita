import { useSelector } from "react-redux";
import { Link } from "react-router";

const OurTeamMember = () => {
  const ourTeamMemberData = useSelector((state) => state.ourTeamMember);
  return (
    <section className="bg-white">
      <div className="container space-y-8 lg:space-y-14">
        <div className="lg:max-w-195.5 text-center mx-auto space-y-4">
          <h2>{ourTeamMemberData.sectionTitle}</h2>
          <p>{ourTeamMemberData.sectionDes}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {ourTeamMemberData.teamMembers &&
            ourTeamMemberData.teamMembers.map((item) => (
              <div
                key={item.id}
                className="min-h-105.5 relative rounded-lg overflow-hidden bg-[#0C0C0C] bg-no-repeat bg-cover bg-blend-luminosity"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="absolute w-full h-47 bottom-0 left-0 right-0 bg-[linear-gradient(179.4deg,rgba(217,217,217,0)_0.52%,#000000_82.38%)] z-10"></div>
                <div className="absolute bottom-6 left-6 right-6 top-auto space-y-1.5 z-50">
                  <h6><Link to="/" className="font-outfit font-semibold text-[1.25rem] leading-6 text-white">{item.memberName}</Link></h6>
                  <p className="text-[#B579BC] text-sm leading-5">{item.jobtitle}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamMember;
