document.addEventListener('DOMContentLoaded', function () {
    const date = document.getElementById('date');
    const selectElement = document.getElementById('city-select');
    const loader = document.getElementById('loader');
    const error = document.getElementById('error');
    const cityNameElement = document.getElementById('cityName');
    const prayersContainer = document.querySelector('.prayers');

    const cities = ["Cairo", "Alexandria", "Menoufia"];
    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        selectElement.appendChild(option);
    });

    selectElement.addEventListener('change', function () {
        const cityValue = this.value.trim();

        loader.style.display = 'block';
        error.style.display = 'none';
        prayersContainer.classList.remove('show');

        getPrayerTimes(cityValue);
    });

    function getPrayerTimes(cityValue) {
        const params = {
            city: cityValue,
            country: 'EG'
        };

        axios.get('http://api.aladhan.com/v1/timingsByCity', { params: params })
            .then(function (response) {
                const prayerTimes = response.data.data.timings;
                const hijriDate = response.data.data.date.hijri;
                const gregorianDate = response.data.data.date.gregorian;

                cityNameElement.innerHTML = cityValue;
                document.getElementById('fajr-time').innerHTML = prayerTimes.Fajr || 'N/A';
                document.getElementById('dhuhr-time').innerHTML = prayerTimes.Dhuhr || 'N/A';
                document.getElementById('asr-time').innerHTML = prayerTimes.Asr || 'N/A';
                document.getElementById('maghrib-time').innerHTML = prayerTimes.Maghrib || 'N/A';
                document.getElementById('isha-time').innerHTML = prayerTimes.Isha || 'N/A';

                // Combine Hijri and Gregorian dates
                const formattedDate = `${gregorianDate.day} ${gregorianDate.month.en} ${gregorianDate.year} - ${hijriDate.weekday.ar} ${hijriDate.day} ${hijriDate.month.ar} ${hijriDate.year}`;
                date.innerHTML = formattedDate;

                prayersContainer.classList.add('show');
            })
            .catch(function (error) {
                error.style.display = 'block';
                error.innerHTML = 'Error: ' + error.message;
            })
            .finally(() => {
                loader.style.display = 'none';
            });
    }

    // Trigger the first change event to load initial data
    selectElement.dispatchEvent(new Event('change'));
});
