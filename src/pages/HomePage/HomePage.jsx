import DetailCard from '../../components/DetailCard/DetailCard'
import { Layout } from '../../components/Layout'
import s from './HomePage.module.scss'

export const HomePage = () => {
  return (
    <Layout
      nickName="asd"
      id={1}
    >
      <div className={s.HomePageRoot}>
        <DetailCard
          userName={'name'}
          likes={10}
          comments={[
            { text: 'asd', nickName: 'aaaaaa' },
            { text: 'asd', nickName: 'aaaaaa' },
            { text: 'asd', nickName: 'aaaaaa' },
            { text: 'asd', nickName: 'aaaaaa' }
          ]}
          imgUrl="https://www.finalsitesupport.com/hc/article_attachments/360000650392/800x600.png"
        />
      </div>
    </Layout>
  )
}
