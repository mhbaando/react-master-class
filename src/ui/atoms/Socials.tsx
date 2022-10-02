import { Icon } from "@/resources/icons/Icons";

const Socials: React.FC = (): React.ReactElement => {
  return (
    <div className="navbar__socials">
      <a
        href="https://linkined.com/in/mhbaando"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon type="linkedin" />
      </a>
      <a
        href="https://twitter.com/mhbaando"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon type="twitter" />
      </a>
      <a
        href="https://facebook.com/mhbaando"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon type="facebook" />
      </a>
      <a
        href="https://github.com/mhbaando"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon type="facebook" />
      </a>
    </div>
  );
};

export default Socials;
