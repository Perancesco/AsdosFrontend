const API_KEY = '7ab92b63b627f25d4863f853b604d887';

// Ketika form pencarian dijalankan
$('#searchForm').submit(function(e) {

    // Mencegah halaman refresh
    e.preventDefault();

    // Mengambil judul film dari input
    const title = $('#title').val();

    // Menghapus hasil pencarian sebelumnya
    $('#result').empty();

    // Menghapus pesan error sebelumnya
    $('#error').text('');

    // Data yang akan dikirim ke API
    const data = {
        api_key: API_KEY,
        query: title,
        include_adult: false
    };

    // Meminta data film dari TMDb
    $.get('https://api.themoviedb.org/3/search/movie', data)

        // Jika berhasil mendapatkan data
        .done(function(response) {

            // Jika film tidak ditemukan
            if (response.results.length === 0) {
                $('#error').text('Film tidak ditemukan.');
                return;
            }

            // Menampilkan setiap film
            response.results.forEach(function(movie) {

                $('#result').append(`
                    <tr>
                        <td>
                            <h4>${movie.title}</h4>
                            <p>${movie.overview}</p>
                            <span class="badge badge-success">
                                Rating: ${movie.vote_average}
                            </span>
                        </td>
                    </tr>
                `);

            });

        })

        // Jika gagal mengambil data
        .fail(function() {
            $('#error').text('Gagal mengambil data film.');
        });
});