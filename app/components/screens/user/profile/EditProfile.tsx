// profile/EditProfile.tsx
import {
	Document,
	Font,
	Image,
	Page,
	StyleSheet,
	Text,
	View,
} from '@react-pdf/renderer'
import { FC } from 'react'

Font.register({
	family: 'Roboto',
	src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
})

interface IEditProfile {
	name: string
	picture: string | undefined
}

const styles = StyleSheet.create({
	page: {
		flexDirection: 'row',
		backgroundColor: '#E4E4E4',
	},
	section: {
		margin: 10,
		padding: 10,
	},
	image: {
		width: 200,
	},
	text: {
		fontFamily: 'Roboto',
	},
})

const EditProfile: FC<IEditProfile> = ({ name, picture }) => {
	return (
		<Document>
			<Page size="A4" style={styles.page} wrap>
				<View style={styles.section}>
					<Text style={styles.text}>{name}</Text>
				</View>
				<View style={styles.section}>
					{picture && <Image style={styles.image} src={picture} />}{' '}
				</View>
			</Page>
		</Document>
	)
}

export default EditProfile
