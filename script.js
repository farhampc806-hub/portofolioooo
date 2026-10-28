document.addEventListener("DOMContentLoaded", function () {


    const tahun = document.getElementById("tahun");

    if (tahun) {
        tahun.textContent = new Date().getFullYear();
    }



    const modalProyek = document.getElementById("modalProyek");

    if (modalProyek) {
        modalProyek.addEventListener("show.bs.modal", function (event) {

            const tombol = event.relatedTarget;

            if (!tombol) {
                return;
            }

            const judul = tombol.getAttribute("data-title");
            const deskripsi = tombol.getAttribute("data-description");

            document.getElementById("judulModalProyek").textContent = judul;
            document.getElementById("isiModalProyek").textContent = deskripsi;
        });
    }


    // ===================================
    // 3. VALIDASI FORM KONTAK
    // ===================================

    const contactForm = document.getElementById("contactForm");
    const statusForm = document.getElementById("statusForm");
    const tombolKirim = document.getElementById("tombolKirim");
    const teksTombol = document.getElementById("teksTombol");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            // Periksa apakah input sudah valid.
            if (!contactForm.checkValidity()) {

                event.preventDefault();
                event.stopPropagation();

                contactForm.classList.add("was-validated");

                statusForm.textContent =
                    "Periksa kembali nama, email, dan pesan kamu.";

                statusForm.className = "mt-3 alert alert-danger";

                return;
            }

            // Input valid: biarkan browser mengirim formulir.
            // FormSubmit akan menangani pengiriman pesan.

            tombolKirim.disabled = true;
            teksTombol.textContent = "Mengirim...";

            statusForm.textContent =
                "Formulir sedang dikirim. Mohon tunggu.";

            statusForm.className = "mt-3 alert alert-info";
        });
    }

});