const express = require('express');
const axios = require('axios');

constconst app = express();
app.use(express.json());
consconsconsconsconscons
consconsconsconsconsconsconscons API_KEY = '<YOUR_API_KEY>'; // ReReplconsthReReplconsthURplacReReplconsthReReplconsthURplacURplaceconstURplace with your API key from the data source

// Endpoint for currency conversion
app.post('/convert', async (req, res) => {
  try {
      const { sourceCurrency, targetCurrency, amount } = req.body;

          // Make a request to the data source API for conversion
              const response = await axios.get(
                    `https://api.data-source.com/convert?api_key=${API_KEY}&source=${sourceCurrency}&target=${targetCurrency}&amount=${amount}`
                        );

                            const convertedAmount = response.data.result;

                                res.json({ convertedAmount });
                                  } catch (error) {
                                      console.error('Error in currency conversion:', error.message);
                                          res.status(500).json({ error: 'Currency conversion failed' });
                                            }
                                            });

                                            // Endpoint to get available currencies
                                            app.get('/currencies', async (req, res) => {
                                              try {
                                                  // Make a request to the data source API to retrieve available currencies
                                                      const response = await axios.get(
                                                            `https://api.data-source.com/currencies?api_key=${API_KEY}`
                                                                );

                                                                    const currencies = response.data.currencies;

                                                                        res.json({ currencies });
                                                                          } catch (error) {
                                                                              console.error('Error in retrieving currencies:', error.message);
                                                                                  res.status(500).json({ error: 'Failed to retrieve currencies' });
                                                                                    }
                                                                                    });

                                                                                    // Start the server
                                                                                    app.listen(3000, () => {
                                                                                      console.log('Currency conversion API server started on port 3000');
                                                                                      });