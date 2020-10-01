require 'json'
require 'sinatra/activerecord'
require 'sinatra/base'
require 'sinatra/json'
require 'sinatra/reloader'

Dir[File.join(File.dirname(__FILE__), 'models', '*.rb')].each do |file|
    require file
end

class StarWars < Sinatra::Base
    configure :development do
      register Sinatra::Reloader
    end

    get '/' do
        "Hello World"
    end

    get '/characters' do
        characters = Character.eager_load(:gender, :specie, :planet).all
        json characters.as_json(include: [:gender, :specie, :planet])
    end

    get '/characters/:id' do
        character = Character.eager_load(:gender, :specie, :planet).find(params[:id])
        json character.as_json(include: [:gender, :specie, :planet])
    end

    get '/planets' do
        planets = Planet.includes(:climates, :terrains).all
        json planets.as_json(include: [:climates, :terrains])
    end

    get '/planets/:id' do
        planet = Planet.includes(:climates, :terrains, characters: [:gender, :specie, :planet]).find(params[:id])
        json planet.as_json(include: [:climates, :terrains, :characters => {
            include: [:gender, :specie, :planet]
        }])
    end

    get '/species' do
        species = Specie.eager_load(:classification, :designation, :language, :planet).all
        json species.as_json(include: [:classification, :designation, :language, :planet])
    end

    get '/species/:id' do
        specie = Specie.includes(:classification, :designation, :language, :planet, characters: [:gender, :specie, :planet]).find(params[:id])
        json specie.as_json(include: [:classification, :designation, :language, :planet, :characters => {
            include: [:gender, :specie, :planet]
        }])
    end

    get '/starships' do
        json Starship.all
    end

    get '/starships/:id' do
        json Starship.find(params[:id])
    end

    get '/vehicles' do
        json Vehicle.all
    end

    get '/vehicles/:id' do
        json Vehicle.find(params[:id])
    end
end