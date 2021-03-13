import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, TextInput, ScrollView, View, Image } from 'react-native';
import { Divider } from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* artikel section */}
        {/* sumber berita : https://food.detik.com/info-sehat/d-5490252/5-makanan-dan-minuman-yang-perlu-dihindari-setelah-divaksin */}
        <Text style={styles.header1}>5 Makanan dan Minuman yang Perlu Dihindari Setelah Divaksin</Text>
        <Image style={styles.titleImage} source={{ uri: 'https://akcdn.detik.net.id/community/media/visual/2019/11/18/9f639fd8-a4bf-47c8-bf0f-e4b4baead254_43.jpeg?w=700&q=90' }} />
        <Text style={styles.paragraph}>
          Jakarta - Efektivitas vaksin dipengaruhi oleh asupan makanan yang masuk ke dalam tubuh. Ada beberapa makanan yang harus dihindari setelah vaksin agar berjalan efektif.
      </Text>
        <Text style={styles.paragraph}>
          Nutrisi memainkan peran utama dalam kemanjuran vaksin. Sebuah studi yang dipublikasikan dalam jurnal PLoS menemukan bahwa gizi yang baik adalah kunci untuk memperkuat respons kekebalan tubuh terhadap vaksin
      </Text>
        <Text style={styles.paragraph}>
          Artinya, kamu perlu memperhatikan asupan nutrisi untuk kekebalah tubuh, baik sebelum atau setelah disuntik vaksin.
      </Text>
        <Text style={styles.paragraph}>
          Dilansir dari CNN Indonesia (10/3) sebuah studi dilakukan untuk mengetahui persiapan atau hal-hal yang harus dilakukan dalam vaksinasi. Studi yang diterbitkan dalam jurnal Advance Social Sciences & Humanities ini mengamati 49 studi vaksin yang dilakukan sebelumnya selama tiga dekade terakhir.
      </Text>
        <Text style={styles.paragraph}>
          Hasilnya, stres menjadi faktor utama yang dapat memengaruhi efektivitas vaksin. Selain itu, pola makan juga memainkan peran yang besar.
      </Text>
        <Text style={styles.paragraph}>
          Jika ingin meningkatkan kesehatan secara menyeluruh, maka kamu perlu menerapkan pola makan tinggi makanan utuh yang mengandung serat dan minum lebih banyak air setiap hari.
      </Text>
        <Text style={styles.paragraph}>
          Kamu disarankan untuk sejenak menghindari minuman beralkohol. Sejumlah negara melarang meminum alkohol sebelum dan setelah vaksin. Alkohol dikhawatirkan memiliki efek samping terhadap vaksin.
      </Text>
        <Text style={styles.paragraph}>
          Sebuah studi dilakukan untuk mengetahui persiapan atau hal-hal yang harus dilakukan dalam vaksinasi. Studi yang diterbitkan dalam jurnal Advance Social Sciences & Humanities ini mengamati 49 studi vaksin yang dilakukan sebelumnya selama tiga dekade terakhir.
      </Text>
        <Text style={styles.paragraph}>
          Hasilnya, stres menjadi faktor utama yang dapat memengaruhi efektivitas vaksin. Selain itu, pola makan juga memainkan peran yang besar.
      </Text>
        <Text style={styles.paragraph}>
          Jika ingin meningkatkan kesehatan secara menyeluruh, maka kamu perlu menerapkan pola makan tinggi makanan utuh yang mengandung serat dan minum lebih banyak air setiap hari.
      </Text>
        <Text style={styles.paragraph}>
          Kamu juga disarankan untuk sejenak menghindari minuman beralkohol. Sejumlah negara melarang meminum alkohol sebelum dan setelah vaksin. Alkohol dikhawatirkan memiliki efek samping terhadap vaksin.
      </Text>
        <Text style={styles.paragraph}>
          Selain itu, sebaiknya untuk sementara waktu menghindari makanan yang tinggi lemak jenuh seperti junk food. Makanan dengan tinggi gula juga harus dihindari.
      </Text>
        <Text style={styles.paragraph}>
          Mengutip Eat This, berikut makanan yang harus dihindari setelah vaksin.
      </Text>
        <Text style={styles.header2}>1. Minuman bersoda atau dengan pemanis</Text>
        <Text style={styles.paragraph}>
          Kamu benar-benar disarankan untuk tidak meminum minuman jenis ini. Minuman jenis ini tak memiliki satu pun manfaat kesehatan.
      </Text>
        <Text style={styles.paragraph}>
          Alih-alih sehat, terlalu banyak minuman bersoda dan berpemanis berisiko penambahan berat badan, diabetes, kerusakan gigi, pembentukan lemak, kolesterol tinggi, dan masih banyak lagi risiko lainnya.
      </Text>
        <Text style={styles.header2}>2. Makanan olahan</Text>
        <Text style={styles.paragraph}>
          Makanan olahan didefinisikan sebagai makanan yang telah diubah dari bentuk aslinya dengan pemrosesan pabrik. Makanan dengan proses tinggi cenderung dibuat dengan bahan yang tak sehat seperti gula dan lemak jenuh.
      </Text>
        <Text style={styles.header2}>3. Minuman berenergi</Text>
        <Text style={styles.paragraph}>
          Minuman berenergi mengandung stimulan seperti kafein yang membebani kelenjar adrenal dan bersifat adiktif.
      </Text>
        <Text style={styles.paragraph}>
          Tak hanya itu, minuman berenergi juga umumnya mengandung gula dalam jumlah yang tinggi.
      </Text>
        <Text style={styles.header2}>4. Makanan cepat saji</Text>
        <Text style={styles.paragraph}>
          Makanan cepat saji jelas bukan pilihan yang tepat. Makanan ini melalui pemrosesan yang tinggi dengan tambahan lemak jenuh dan garam yang tinggi.
      </Text>
        <Text style={styles.header2}>5. Minuman beralkohol</Text>
        <Text style={styles.paragraph}>
          Alkohol dikhawatirkan dapat memengaruhi respons vaksin dalam membentuk pertahanan melawan virus. Sebuah studi juga menemukan, konsumsi alkohol berdampak negatif terhadap sistem kekebalan tubuh.
      </Text>
        <Text style={{ marginTop: 50 }}></Text>
        <TextInput placeholder="Apa komentarmu ?" style={{ height: 100 }} />
        <Button title="Tambah Komentar" color="#841584" />
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    paddingHorizontal: 10,
    paddingBottom: 5,
    backgroundColor: '#f7e9e9',
  },
  header1: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  header2: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 15,
    marginVertical: 5,
  },
  titleImage: {
    flex: 1,
    height: 200,
  },
  scrollView: {
    backgroundColor: '#f7e9e9',
  }
});
