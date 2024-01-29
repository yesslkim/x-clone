import styles from './page.module.css';

type Props = { children: React.ReactNode; modal: React.ReactNode };

const Layout = ({ children, modal }: Props) => {
	return (
		<div className={styles.container}>
			{children}
			{modal}
		</div>
	);
};

export default Layout;
