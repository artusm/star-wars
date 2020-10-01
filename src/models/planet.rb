class Planet < ActiveRecord::Base
    has_and_belongs_to_many :climates
    has_and_belongs_to_many :terrains
    has_many :characters, foreign_key: 'homeworld_id'
    validates_uniqueness_of :name
end