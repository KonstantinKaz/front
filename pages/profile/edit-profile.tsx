// // pages/profile/edit-profile.tsx

// import Layout from '@/components/layout/Layout'
// import EditProfile from '../../app/components/screens/user/profile/EditProfile'

// import { FC } from 'react'

// const EditProfilePage: FC = () => {
// 	return (
// 		<Layout>
// 			<EditProfile />
// 		</Layout>
// 	)
// }

// export default EditProfilePage

// pages/profile/edit-profile.tsx
import Layout from '@/components/layout/Layout'
import ProfileForm from '@/components/screens/user/profile/ProfileForm'

import { FC } from 'react'

const EditProfilePage: FC = () => {
	return (
		<Layout>
			<ProfileForm />
		</Layout>
	)
}

export default EditProfilePage
